function toggleContent() {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let checked = document.querySelectorAll('input[type="checkbox"]:checked');
  
    if (checked.length === 0) {
        checkboxes.forEach(checkbox => {
            checkbox.checked = true;
        }
        )
    } else {
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        }
        )
    }
  

}
