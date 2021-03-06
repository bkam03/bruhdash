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
    //console.log(arguments);
    start = start || 0;
    end = end || array.length;
    return array.fill(filling,start,end);
  },

  // removes all given values from an array
  pull: function (array, pullArray) {
    //console.log(arguments);

    function pulling(value) {
      if(this.indexOf(value) === -1) {
        return true;
      } else {
        return false;
      }
    }
    return array.filter(pulling, pullArray);
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (array, pullArray) {
    //console.log(arguments);
    //mark items to be removed with fill char.    
    for(var i = 0; i < pullArray.length;i++) { 
      array[pullArray[i]] = "XXX";
    }
    console.log(array);
    //copy nonfill characters to new array and return
  
    var newArray = array.filter(function(x) { return x !== "XXX"});
    return newArray;

  },

  // creates an array excluding all the specified values
  without: function(array, banArray) {
    //console.log(arguments);
    function filtering (value) {
      if(this.indexOf(value) === -1) {
        return true;
      } else {
        return false;
      }
    }
    return array.filter(filtering, banArray);
  },

  // returns an array with specified values excluded
  difference: function(arr1, arr2) {
    console.log(arguments);
    function filtering(value) {
      if(this.indexOf(value) === -1) {
        return true;
      } else {
        return false;
      }
    }
    return arr1.filter(filtering,arr2);
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function (arr1, arr2) {
    console.log(arguments);
    var zipArray = [];
    if(arr1.length === arr2.length) {
      for(var i = 0; i < arr1.length;i++) {
        zipArray.push([arr1[i],arr2[i]]);
      }
      return zipArray;
    } else {
      return null;
    }
  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function (zipArray) {
    var array = [ [],[] ];
    zipArray.forEach(unzip);
    function unzip(value) {
      array[0].push(value[0]);
      array[1].push(value[1]);
    }
    return array;
  },

  // creates an array of elements into groups of length of specified size
  chunk: function(array,chunk){
    var chunkCount = 0;
    var mainArray = [];
    var chunkArray = [];
    if(array ===0 || chunk ===0) {
      return mainArray;
    }
    for(var i=0;i<array.length;i++) {//cycle through array
      chunkArray.push(array[i]);  //add element from array to smaller array
      chunkCount++;   //increase count on smaller array
      if(chunkCount >= chunk) {  //when small array reaches proper size
        chunkCount = 0;  //reset small array count
        mainArray.push(chunkArray); //add small array to large array
        chunkArray = [];  //reset small array
      }
    }
    if(chunkCount >0) { //if loop ends with remaining small array
       mainArray.push(chunkArray); //add to main array
    }
    return mainArray;
  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function(item,func) {
    if(Array.isArray(item)) {
      return  item.forEach(func);
    } else {
      for(var key in item) {
      func(item[key]);
      }
      return;
    }
  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function(container,funct) {
    
    if(Array.isArray(container)) {
      return container.map(funct);
    } else {
      var output = [];
      for(var key in container) {
        output.push(funct(container[key]));
        console.log(output);
      }
        return output;
    }
  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function(object,process) {
    console.log(arguments);
    if(Array.isArray(object)) {
      return object.filter(process);
    } else {
      var obj = {};
      for(var key in object) {
        if(process(object[key])) {
          obj[key] = object[key];
        }
        
      }
      console.log(obj);
      return obj;
    }
  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function(object,process) {
    console.log(arguments);
    if(Array.isArray(object)) {
      return object.reduce(process);
    } else {
      var sum = 0;
      for(var key in object) {
        sum = process(sum, object[key]);
      console.log(sum);
      }
      return sum;
    }
  }
};