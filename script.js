document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        data.forEach(item => {
          updateRow(item);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  
  function updateRow(item) {
    const rowElement = document.querySelector(`.row-${item.category.toLowerCase()}`);
    if (rowElement) {
      const iconElement = rowElement.querySelector('.row-icon');
      const titleElement = rowElement.querySelector('.row-title');
      const scoreElement = rowElement.querySelector('.your-row-score');
  
      // Update icon, title, and score
      if (iconElement) iconElement.style.backgroundImage = `url('${item.icon}')`;
      if (titleElement) titleElement.textContent = item.category;
      if (scoreElement) scoreElement.textContent = item.score;
    }
  }
  