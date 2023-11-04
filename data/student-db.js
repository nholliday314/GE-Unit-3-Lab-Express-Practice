const students = [
    { id: 1, name: 'John Doe', enrolled: true },
    { id: 2, name: 'Jane Smith', enrolled: false },
    { id: 3, name: 'Bob Johnson', enrolled: true },
    { id: 4, name: 'Alice Brown', enrolled: false },
    { id: 5, name: 'Eva Green', enrolled: true },
  ];

module.exports = {
    getAll: function() {
        return students;
    }
};