// Get all the tabs
const tabNav = document.querySelectorAll('.tab-nav');
const tabContent = document.querySelectorAll('.tab-content');

tabNav.forEach(clickedTab => {
    // Add onClick event listener on each tab
    clickedTab.addEventListener('click', () => {
        // Remove the active class from all the tabs (this acts as a "hard" reset)
        tabNav.forEach(tab => {
            tab.classList.remove('active');
        });

        tabContent.forEach(tab => {
            tab.classList.remove('active');
        });       

        // Add the active class on the clicked tab
        clickedTab.classList.add('active');

        // Change the background color of the page
        const bodyBGColor = getComputedStyle(clickedTab).getPropertyValue('color');
        //const tabBGColor = getComputedStyle(clickedTab).getPropertyValue('background-color');         
        document.body.style.background = bodyBGColor;
        
        var tabSelected = clickedTab.classList[1];
    
        tabContent.forEach(tab => {
            if(tab.classList.contains(tabSelected)){
                tab.classList.add('active');
                //tab.style.background = tabBGColor;
            }
        });
        
		console.log(bodyBGColor);
        
    });
});

