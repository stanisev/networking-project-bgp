      let sidebar = document.querySelector(".sidebar")
      let footer = document.querySelector(".footer");
      let closeBtn = document.querySelector("#btn");
      let menuTitle = document.querySelector(".logo_name");
      let profile = document.querySelector(".profile");

      let q_answer = document.querySelectorAll(".q_answer");
      let answer_button = document.querySelector(".margin-style");
      let isShown = false;

      if (answer_button) {
        answer_button.addEventListener("click", () => {
          hideShowAnswers();
         });
      }

       function hideShowAnswers() {
         if (isShown) {
           q_answer.forEach(value => value.style.display = 'none');
           isShown = false;
           answer_button.innerHTML = 'Покажи отговорите';

         } else {
          q_answer.forEach(value => value.style.display = 'block');;
          isShown = true;
          answer_button.innerHTML = 'Скрий отговорите';
         }
       }
    
      closeBtn.addEventListener("click", () => {
       if (isNotMedia()) {
        toogleOpen();
        menuBtnChange(); // will open the sidebar on btn click;
       }
      });

      profile.addEventListener("click", () => {
        if (isNotMedia()) {
          toogleOpen();
          menuBtnChange(); // will open the sidebar on profile info click;
         }
      });

      menuTitle.addEventListener("click", () => {
        if (isNotMedia()) {
          toogleOpen();
          menuBtnChange(); // will open the sidebar on Menu title click;
         }
      });
    
      // following are the code to change sidebar button(optional)
      function menuBtnChange() {
       if (sidebar.classList.contains("open")) {
         closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the icons class
       } else {
         closeBtn.classList.replace("bx-menu-alt-right","bx-menu"); //replacing the icons class
       }
      }

      function toogleOpen() {
        sidebar.classList.toggle("open");
        footer.classList.toggle("open-footer");
      }

      function isNotMedia() {
        return (window.innerWidth > 568);
      }
