let app = new Vue ({
  el: '#app',
  data: {
    grabUser: 0,
    pageTitle:'Users',
    users: [],
    newUser: {
      // id: 0,
      phoneNumber: '',
      email:'',
      age: '',
      gender: ''
      }
  },
  methods: {
    getUser: function () {
      axios.get('http://127.0.0.1:3000/get-user/'+ this.grabUser)
        .then(function (response) {
          console.log(response.data[0]);
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    addUser: function (user) {
      console.log(user);
      axios.post('http://127.0.0.1:3000/add-user/', user)
        .then(function (response) {
          console.log(response.data[0]);
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    deleteUser: function(id) {
      axios.delete('http://127.0.0.1:3000/delete-user/' + id)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    updateUser: function(user) {
      axios.patch('http://127.0.0.1:3000/update-user/', user)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
},
  created: function() {
    let _this = this;
    axios.get('http://127.0.0.1:3000/users')
      .then(function (response) {
        _this.users = response.data;
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    }
});
