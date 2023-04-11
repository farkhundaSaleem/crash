  
 ///Q1/////
  function add(y) {
    return x + y;
  }


  return add;
  const add5 = createAdder(5);
  const add10 = createAdder(10);
  

  const result1 = add5(3);  
  const result2 = add10(7);

   ///Q2/////


   function searchArray(arr, value) {
    if (arr.length === 0) {
      return false;
    }
  
  
    if (arr[0] === value) {
      return true;
    }
  

    return searchArray(arr.slice(1), value);
  }
  const arr = [1, 2, 3, 4, 5];
  const value1 = 3;
  const value2 = 6;
  
  console.log(searchArray(arr, value1)); /
  console.log(searchArray(arr, value2));

   ///Q3/////


   function addParagraphToDocument(text) {
  
    const newParagraph = document.createElement('p');
  
    newParagraph.textContent = text;
  
    document.body.appendChild(newParagraph);
  }
  const text = "This is a new paragraph added to the document!";
addParagraphToDocument(text);



   ///Q4/////

   function addListItemToUnorderedList(text2) {
  
    const newListItem = document.createElement('li');
  
 
    newListItem.textContent = text2;
  
    
    const unorderedList = document.querySelector('ul');
  

    unorderedList.appendChild(newListItem);
  }
  const text2 = "This is a new list item added to the unordered list!";
addListItemToUnorderedList(text2);
 ///Q5/////



 function changeBackgroundColor(element, newColor) {

    if (!element instanceof HTMLElement) {
      console.error('Invalid element reference provided');
      return;
    }
  
 
    element.style.backgroundColor = newColor;
  }




   ///Q6/////


   function saveObjectToLocalStorage(key, object) {
  
    if (typeof localStorage === 'undefined') {
      console.error('localStorage is not supported in this browser');
      return;
    }
  

    const objectString = JSON.stringify(object);
  
  
    localStorage.setItem(key, objectString);
  }