function toggleIcon(event) {
  event.target.classList.toggle('far');
  event.target.classList.toggle('fas');
};

function bookmark() {
  document.querySelectorAll(".dev-bookmark").forEach((bookmark) => {
    bookmark.addEventListener("click", (event) => {
      event.preventDefault();
      let devId = event.target.parentElement.parentElement.id.split("-")[1]
      fetch('/bookmarked_developers', {
        method: 'post',
        body: JSON.stringify({developer_id: devId}),
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': Rails.csrfToken()
        },
        credentials: 'same-origin'
      }).then(() => toggleIcon(event))


      // event.currentTarget.classList.toggle("img-circle");
    });
  });
};

export { bookmark };
