function Stack(){
    this.items = [];
    this.elements = 0;
    this.push = push;
    this.pop = pop;
    this.isEmpty = isEmpty;
    this.peek = peek;

    function push( item ){
        this.items.push( item );
        this.elements++;
    }

    function pop(){
      if ( this.elements > 0 )
      {
        this.elements--;
        return this.items.pop();
      }
    }

    function peek(){
      return this.items[ this.elements - 1 ];
    }

    function isEmpty(){
      return this.elements == 0;
    }

    function size(){
      return this.elements;
    }
}


var st = new Stack();
st;
st.items;
st.push(2);
st.push(3);
st.push(4);
st;
st.items;

st.peek();
st.items;

function reverseWord( s ){
  /*
       s : 'abc' , 'cba'
  */
  var st = new Stack();
  for ( var i = 0; i < s.length; i++ ){
    st.push( s[i] );
  }

  var x = '';
  while ( !st.isEmpty() ){
     x += st.pop();
  }

  return x;
}

reverseWord("diana");
reverseWord("abcdefghijk");

