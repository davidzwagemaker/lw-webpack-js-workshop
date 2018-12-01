import flatpickr from 'flatpickr'

const parseDate = (string) => {
  const pattern = /(\d{2})-(\d{2})-(\d{4})/;
  return new Date(string.replace(pattern,'$3-$2-$1'));
}

function updateCosts(startDate, endDate) {
  let hours = Math.ceil((parseDate(endDate) - parseDate(startDate)) / (1000 * 3600 * 24)) * 6;

  let hourField = document.getElementById('hours');
  let priceField = document.getElementById('price');
  let serviceField = document.getElementById('service-fee');
  let totalPriceField = document.getElementById('total-price');
  let basePrice = document.querySelector('.costs').dataset.rate;

  hourField.innerHTML = hours;

  let price = basePrice * hours;

  priceField.innerHTML = price;
  serviceField.innerHTML = price * 0.15;
  totalPriceField.innerHTML = price + price * 0.15;
};

function showCostsOverview() {
  const costs = document.querySelector('.costs')
  costs.classList.add('is-visible')
};

function hideCostsOverview() {
  const costs = document.querySelector('.costs')
  costs.classList.remove('is-visible')
};



function booking() {
  let startDateinput = document.getElementById('booking_start_date');
  let endDateinput = document.getElementById('booking_end_date');

  if (startDateinput && endDateinput) {
    flatpickr(startDateinput, {
    minDate: 'today',
    dateFormat: 'd-m-Y',
    onChange: function(_, selectedDate) {
      if (selectedDate === '') {
        console.log('1')
        hideCostsOverview();
      }
      else {
        endDateCalendar.set('minDate', selectedDate);
        endDateinput.disabled = false;
        console.log('2')
      }
    }
  });
    const endDateCalendar =
      flatpickr(endDateinput, {
        dateFormat: 'd-m-Y',
        onChange: function(_, selectedDate) {
          if (selectedDate === '') {
            hideCostsOverview();
          } else {
            showCostsOverview();
            console.log('3');
            updateCosts(startDateinput.value, endDateinput.value)
          }
        }
      });
  }

};

export { booking };
