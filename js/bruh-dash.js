var global = window || GLOBAL;

global.bruhdash = {

  // returns the first element of an array
  first: function (array) {
    return array[0];
  },

  // returns the last element of an array
  last: function (array) {
    return array[array.length-1];
  },

  // returns the index of the first matching element from left to right
  indexOf: function (array, element) {
    //go through each element in array
    //console.log(element);
    for(var i = 0; i<array.length;i++) {
    //look if there are copies in the array
      var currentIndex = array.indexOf(element); 
      //console.log(currentIndex);
    //if there is, return index of this element
      if( currentIndex !== -1) {
        return currentIndex;
      }
    }
    return -1;
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (array,element) {
    //loop through array
    for(var i = 0; i < array.length; i++) {
      //check if element exists in array
      var currentIndex = array.lastIndexOf(element);
      if(currentIndex !== -1) {
        return currentIndex;
      }
    }
    return -1;
  },

  // returns an array with all elements except for the last element
  initial: function (array) {
    array.pop();
    return array;
  },
  
  // returns an array with all falsey values removed
  compact: function(array) {
    console.log(array);
    function falsey(value) {
      if((isNaN(value)) || (value == null) || (value == 0)) {
        return false;
      } else {
      return true;
      }
    }
    return array.filter(falsey);
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (array, start, end) {
    console.log(arguments);
    return array.slice(start,end);
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(array, n){
    if (n === undefined) {
      n = 1;
    }
    return (array.slice(n));
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(array, n) {
    //if n is unspecified, drop last element
    console.log(array,n);
    if(n === undefined) {
      console.log("undefined");
      n = 1;
    }
    //if n is 0, return whole array
    var endNum = array.length - n;

    return array.slice(0,endNum);
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (array, elements) {
    if(elements == undefined) {
      elements = 1;
    }
    return array.slice(0,elements);
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (array,elements) {
    console.log(arguments);
    if(elements == undefined) {
      elements = 1;
    }
    return array.slice(array.length - elements);


  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(array, filling,start,end) {
    console.log(arguments);
    start = start || 0;
    end = end || array.length;
    return array.fill(filling,start,end);
  },

  // removes all given values from an array
  pull: function () {

  },

  // removes elements of an array corresponding to the given indices
  pullAt: function () {

  },

  // creates an array excluding all the specified values
  without: function() {

  },

  // returns an array with specified values excluded
  difference: function() {

  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};