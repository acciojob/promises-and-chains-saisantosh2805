 <script type="text/javascript">
      //your JS code here. If required.
      // Add event listener to the form submit event
      document
        .getElementById("userForm")
        .addEventListener("submit", function (e) {
          e.preventDefault(); // Prevent default form submission behavior

          // Get the input values
          const name = document.getElementById("name").value;
          const age = document.getElementById("age").value;

          // Validate inputs are not empty
          if (name === "" || age === "") {
            alert("Please fill in both fields.");
            return;
          }

          // Create a new promise for the form submission
          new Promise(function (resolve, reject) {
            setTimeout(() => {
              if (age >= 18) {
                resolve();
              } else {
                reject();
              }
            }, 4000); // Resolve or reject after 4 seconds
          })
            .then(function () {
              alert(`Welcome, ${name}. You can vote.`);
            })
            .catch(function () {
              alert(`Oh sorry ${name}. You aren't old enough.`);
            });
        });
    </script>
  </body>
</html>