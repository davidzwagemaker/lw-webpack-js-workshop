import autocomplete from "js-autocomplete";

function autocompleteSearch() {
  let i;
  const searchElement = document.getElementById('search-data');
  const skills = JSON.parse(searchElement.dataset.skills);
  new autocomplete({
    selector: 'input[name="q"]',
    minChars: 2,
    source: function(term, suggest){
        term = term.toLowerCase();
        var choices = skills;
        var matches = [];
        for (i=0; i<choices.length; i++)
            if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
        suggest(matches);
    }
});
}


export { autocompleteSearch };
