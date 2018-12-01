import $ from 'jquery';
import 'select2';

function select() {
  const skills = document.getElementById('developer_skill_ids');
  $(skills).select2();
};

export { select }
