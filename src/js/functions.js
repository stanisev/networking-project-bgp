      let sidebar = document.querySelector(".sidebar");
      let closeBtn = document.querySelector("#btn");
      let menuTitle = document.querySelector(".logo_name");
      let profile = document.querySelector(".profile");
    
      closeBtn.addEventListener("click", ()=>{
        sidebar.classList.toggle("open");
        menuBtnChange(); // will open the sidebar on btn click;
      });

      profile.addEventListener("click", ()=>{
        sidebar.classList.toggle("open");
        menuBtnChange(); // will open the sidebar on profile info click;
      });

      menuTitle.addEventListener("click", ()=>{
        sidebar.classList.toggle("open");
        menuBtnChange(); // will open the sidebar on Menu title click;
      });
    
      // following are the code to change sidebar button(optional)
      function menuBtnChange() {
       if(sidebar.classList.contains("open")){
         closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
       }else {
         closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
       }
      }
