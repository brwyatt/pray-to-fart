walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
            if(node.parentElement.tagName.toLowerCase() != "script") {
                handleText(node);
            }
			break;
	}
}

function handleText(textNode) {
  var v = textNode.nodeValue;

  // Deal with the easy case
  v = v.replace(/\b(P|p)ray(er|)/g, function(match, p1, p2, offset, string) {
    // p - 10 = f
    f = String.fromCharCode(p1.charCodeAt(0) - 10);
    return f + "art";
  });

  textNode.nodeValue = v;
}


