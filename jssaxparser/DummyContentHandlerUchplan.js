/* sax 2 methods
 void 	attributeDecl(java.lang.String eName, java.lang.String aName, java.lang.String type, java.lang.String mode, java.lang.String value)
          Report an attribute type declaration.
 void 	comment(char[] ch, int start, int length)
          Report an XML comment anywhere in the document.
 void 	elementDecl(java.lang.String name, java.lang.String model)
          Report an element type declaration.
 void 	endCDATA()
          Report the end of a CDATA section.
 void 	endDTD()
          Report the end of DTD declarations.
 void 	endEntity(java.lang.String name)
          Report the end of an entity.
 void 	externalEntityDecl(java.lang.String name, java.lang.String publicId, java.lang.String systemId)
          Report a parsed external entity declaration.
 InputSource 	getExternalSubset(java.lang.String name, java.lang.String baseURI)
          Tells the parser that if no external subset has been declared in the document text, none should be used.
 void 	internalEntityDecl(java.lang.String name, java.lang.String value)
          Report an internal entity declaration.
 InputSource 	resolveEntity(java.lang.String publicId, java.lang.String systemId)
          Invokes EntityResolver2.resolveEntity() with null entity name and base URI.
 InputSource 	resolveEntity(java.lang.String name, java.lang.String publicId, java.lang.String baseURI, java.lang.String systemId)
          Tells the parser to resolve the systemId against the baseURI and read the entity text from that resulting absolute URI.
 void 	startCDATA()
          Report the start of a CDATA section.
 void 	startDTD(java.lang.String name, java.lang.String publicId, java.lang.String systemId)
          Report the start of DTD declarations, if any.
 void 	startEntity(java.lang.String name)
          Report the beginning of some internal and external XML entities.
*/
var integer = function() {

};
integer.prototype.parseInt = function( s ) {
	return parseInt( s );
}
var Integer = new integer();
//console.log ( Integer.parseInt( "4343" ) );

Array.prototype.add = function( k, s ) {
	this.push( s );
}

String.prototype.equals = function( s ) {
	var flag = false;
	try {
		if ( this.indexOf( s ) > -1 ) flag = true;
	} 
	catch (err) {}
	return flag;
}

String.prototype.contains = function( s ) {
	var flag = false;
	if ( s==this ) flag = true;
	return flag;
}

function SaveToFile(sssr) {
    
    HTMLcode+=sssr;
    
}

function AddStyle() {
      // System.out.println("Start document");
    SaveToFile( "<link rel=\"stylesheet\" type=\"text/css\" href=\"tablestyle.css\">" );
    SaveToFile("<style>\n");
      SaveToFile("\t p, ul {font-size: 14pt; color: black; line-height: 1; text-indent: 1.25cm; } \n");
    SaveToFile("\t p.zag {font-size: 14pt; color: black; line-height: 1; text-indent: 0cm;} \n");
    SaveToFile("\t h1,h2,h3 {font-size: 14pt; align=\"center\"; } \n");

      SaveToFile("@media print {.more { page-break-after: always; } } ");
    SaveToFile("</style>\n");
}
				
		var nom, formaObuch = "";
		var directionName, profileName, dicName;		
		var semestrCount, N = 80, M = 11, sum;
		var kursNumber=-1, kursSelNumber = 1;
		var dicName;
		var strokiPlana; //СтрокиПлана;
		var DisciplineForRazdelov; // ДисциплинаДляРазделов
		var HTMLcode = "";
		var DBcycle = ""; var flagCycle; // если дисциплины выборные
		
		
		var matrixA = new Array(N);			
			for (var i = 0; i < N; i++) {
			  matrixA[i] = new Array(M);
			}		
	            /* Описание массива matrixA
          <Сессия Ном="3" Пр="8" КСР="2" СРС="58" ЧасЭкз="4" Зач="1" ВидКонтр="З">

                Дисц наме    0
                Номер семестра/сессии		1
                Лекции	2
                Практические занятия (ПЗ)	3
                Лабораторные работы (ЛР)	4
                Вид промежуточной аттестации (зачет)	5
                Вид промежуточной аттестации (зачет c оценкой)	5
                Вид промежуточной аттестации (экзамен)	7
                Курсовой проект (работа) 8
                Контрольные работы 9
                Расчетно-графические работы 10
             */
			 

// Begin namespace
(function () {

/* Private static helper function */

/* Private static helpers treated below as private instance methods, so don't need to add these to the public API; we might use a Relator to also get rid of non-standard public properties */
function _displayAtts (atts) {
    for (var i = 0 ; i < atts.getLength() ; i++) {
        this.div.innerHTML += "attribute [" + atts.getURI(i) + "] [" + atts.getLocalName(i) + "] [" + atts.getValue(i) + "]<br/>";
    }
}

function _serializeSaxParseException (saxParseException) {
    this.div.innerHTML += "invalid char : [" + saxParseException.ch + "] at index : " + saxParseException.index + "<br/>";
    this.div.innerHTML += "message is : [" + saxParseException.message + "]<br/>";
    if (saxParseException.exception) {
        this.div.innerHTML += "wrapped exception is : [" + _serializeSaxParseException.call(this, saxParseException.exception) + "]<br/>";
    }
}


function DummyContentHandler(div) {
    
    this.div = div;
    
}

// INTERFACE: ContentHandler: http://www.saxproject.org/apidoc/org/xml/sax/ContentHandler.html
// implemented in DefaultHandler, DefaultHandler2:
//  http://www.saxproject.org/apidoc/org/xml/sax/helpers/DefaultHandler.html and
//  http://www.saxproject.org/apidoc/org/xml/sax/ext/DefaultHandler2.html
DummyContentHandler.prototype.startDocument = function() {

				// alert( kursSelNumber );
                    SaveToFile("<html>\n");
                    SaveToFile("<head>\n");
                    SaveToFile("\t<title>XML to html</title>\n");
                    //SaveToFile("\t<link rel=\"stylesheet\" type=\"text/css\" href=\"tablestyle.css\">\n");
                    AddStyle();
                    SaveToFile("</head>\n");
                    SaveToFile("<body>\n");
                    SaveToFile("<p align = \"center\"> <b>ООП</b></p>\n");
                    SaveToFile("<p align = \"center\"> <b>" + directionName + "</b></p>\n" );
                    SaveToFile("<p align = \"center\"> <b>" + profileName + "</b></p>\n" );
                    SaveToFile("<p>&nbsp;</p>\n");
                    strokiPlana = false; //СтрокиПлана;

                    semestrCount = 0; flagCycle = false;
					HTMLcode = "";
                    for (var i = 0; i<N; i++ ) {
                        for (var j = 0; j<M; j++ ) {
                            matrixA[i][j] = "";
                        }
                    }
};

DummyContentHandler.prototype.startElement = function(namespaceURI, localName, qName, attributes) {
  //  this.div.innerHTML += "startElement [" + namespaceURI + "] [" + localName + "] [" + qName + "]<br/>";
  //  _displayAtts.call(this, attributes);
               if (qName == "План") {

                        formaObuch = attributes.getValue("ФормаОбучения");
						//alert( formaObuch );
                    }

                    if ( qName == "Строка" ) {
						DisciplineForRazdelov = false;
                        dicName = attributes.getValue("Дис");
						// console.log( "Дис " + dicName ); 
                        var attr = attributes.getValue("ДисциплинаДляРазделов");
						// console.log( "attr " + attr );
                        if (attr != null) {
							if (attr == "1") {
								DisciplineForRazdelov = true;
							}
                        }
						
                        var attr = attributes.getValue("Цикл");
						// console.log( "attr " + attr );
					
					flagCycle = false;						 
                        if (attr != null) {
							
							if (attr.indexOf( "ДВ") > -1 ) {

							 	if ( DBcycle == attr ) { //semestrCount--; console.log( "-- " ); 
								//	matrixA[semestrCount - 1][0] += dicName;
									flagCycle = true;
								}
								DBcycle = attr;
								
							}
                        }
						
                    }

                    if (qName.equals("СтрокиПлана")) {

                        strokiPlana = true;

                    }

                    //     System.out.println("Start Element :" + qName);
                    var text, attr;


                    if (qName.equals("Курс")) {
                        attr = attributes.getValue("Ном");
                        if ( attr != null ) { kursNumber = Integer.parseInt( attr ); }

                    }


                    if ( strokiPlana ) {

                            if ( qName =="Сессия" || qName =="Сем" ) {

                            if ( !(formaObuch =="заочная")) {
                                attr = attributes.getValue("Ном");
                                if (attr != null) {
                                    kursNumber = ( Integer.parseInt(attr) + 1 ) / 2;
									kursNumber = Math.trunc(kursNumber);
                                }
                            }
							
							
							
                                if (kursNumber == kursSelNumber && !DisciplineForRazdelov) {
                               

                          /*  <Сессия Ном="3" Пр="8" КСР="2" СРС="58" ЧасЭкз="4" Зач="1" ВидКонтр="З">
                                    M - значения:
                            M - значения:
                                Дисц наме    0
                                Номер семестра/сессии		1
                                Лекции	2
                                Практические занятия (ПЗ)	3
                                Лабораторные работы (ЛР)	4
                                Вид промежуточной аттестации (зачет)	5
                                Вид промежуточной аттестации (зачет c оценкой)	6
                                Вид промежуточной аттестации (экзамен)	7
                                Курсовой проект (работа) 8
                                Контрольные работы 9
                                Расчетно-графические работы 10
                             */

								if ( flagCycle ) { matrixA[semestrCount - 1][0] += " / " + dicName; } 
								else {
                                 semestrCount++;
								matrixA[semestrCount - 1][0] = dicName;
			
                                attr = attributes.getValue("Ном");
                                if (attr != null) {
								
								//console.log( "Дис " + dicName ); 
								//console.log( "Ном " + attr ); 

                                    if ( formaObuch=="заочная" ) {
                                        switch (attr) {
                                            case "1":
                                                attr = "1) Установочная сессия";
                                                break;
                                            case "2":
                                                attr = "2) Зимняя сессия";
                                                break;
                                            case "3":
                                                attr = "3) Летняя сессия";
                                                break;
                                        }
                                    }

                                    matrixA[semestrCount - 1][1] = attr;
                                }

                                attr = attributes.getValue("Лек");
                                if (attr != null) {
                                    matrixA[semestrCount - 1][2] = attr;
                                }

                                attr = attributes.getValue("Пр");
                                if (attr != null) {
                                    matrixA[semestrCount - 1][3] = attr;
                                }

                                attr = attributes.getValue("Лаб");
                                if (attr != null) {
                                    matrixA[semestrCount - 1][4] = attr;
                                }

                                attr = attributes.getValue("Зач");
                                if (attr != null) {
                                    if (attr.equals("1")) {
                                        matrixA[semestrCount - 1][5] = " + ";
                                    }
                                }

                                attr = attributes.getValue("ЗачО");
                                     if (attr != null) {
                                        if (attr.equals("1")) {
                                            matrixA[semestrCount - 1][6] = " + ";
                                        }
                               }

                                attr = attributes.getValue("Экз");
                                if (attr != null) {
                                    if (attr.equals("1")) {
                                        matrixA[semestrCount - 1][7] = " + ";
                                    }
                                }

                                attr = attributes.getValue("КР"); // курсовая работа
                                if (attr != null) {
                                    if (attr.equals("1")) {
                                        matrixA[semestrCount - 1][8] = " + ";
                                    }
                                }
                                attr = attributes.getValue("КП"); // курсовой проект
                                    if (attr != null) {
                                        if (attr.equals("1")) {
                                            matrixA[semestrCount - 1][8] = " + ";
                                        }
                                }

                                attr = attributes.getValue("КонтрРаб");
                                if (attr != null) {
                                    if (attr.equals("1")) {
                                        matrixA[semestrCount - 1][9] = " + ";
                                    }
                                }

                                attr = attributes.getValue("РГР");
                                if (attr != null) {
                                    if (attr.equals("1")) {
                                        matrixA[semestrCount - 1][10] = " + ";
                                    }
                                }
							  
							  }

                            }
                        }
                    }

   
};

DummyContentHandler.prototype.endElement = function(namespaceURI, localName, qName) {

	   if (qName.equals("СтрокиПлана")) {

               strokiPlana = false;

      }
};

DummyContentHandler.prototype.startPrefixMapping = function(prefix, uri) {
  //  this.div.innerHTML += "startPrefixMapping [" + prefix + "] [" + uri + "]<br/>";
};

DummyContentHandler.prototype.endPrefixMapping = function(prefix) {
  //  this.div.innerHTML += "endPrefixMapping [" + prefix + "]<br/>";
};

DummyContentHandler.prototype.processingInstruction = function(target, data) {
   // this.div.innerHTML += "processingInstruction [" + target + "] [" + data + "]<br/>";
};

DummyContentHandler.prototype.ignorableWhitespace = function(ch, start, length) {
   // this.div.innerHTML += "ignorableWhitespace [" + ch + "] [" + start + "] [" + length + "]<br/>";
};

DummyContentHandler.prototype.characters = function(ch, start, length) {
   // this.div.innerHTML += "characters [" + ch + "] [" + start + "] [" + length + "]<br/>";
};

DummyContentHandler.prototype.skippedEntity = function(name) {
   // this.div.innerHTML += "skippedEntity [" + name + "]<br/>";
};

DummyContentHandler.prototype.endDocument = function() {


                    SaveToFile("<table id = \"myTable\" class=\"tablesorter\">");

                          /*  <Сессия Ном="3" Пр="8" КСР="2" СРС="58" ЧасЭкз="4" Зач="1" ВидКонтр="З">
                                    M - значения:
            M - значения:
                Дисц наме    0
                Номер семестра/сессии		1
                Лекции	2
                Практические занятия (ПЗ)	3
                Лабораторные работы (ЛР)	4
                Вид промежуточной аттестации (зачет)	5
                Вид промежуточной аттестации (зачет c оценкой)	5
                Вид промежуточной аттестации (экзамен)	7
                Курсовой проект (работа) 8
                Контрольные работы 9
                Расчетно-графические работы 10
             */
                    SaveToFile( "\n<thead>\n" );
                    SaveToFile( "\n<tr>\n" );
                    SaveToFile( "\t<th>Название дисциплины</th>" );
                    SaveToFile( "\t<th>Семестр/Сессия</th>" );
                    SaveToFile( "\t<td>Лекц.</td>" );
                    SaveToFile( "\t<td>Практ.</td>" );
                    SaveToFile( "\t<td>Лаб.</td>" );
                    SaveToFile( "\t<td>Зачет</td>" );
                    SaveToFile( "\t<td>Зачет с оценкой</td>" );
                    SaveToFile( "\t<td>Экз.</td>" );
                    SaveToFile( "\t<td>Курс.раб./проект</td>" );
                    SaveToFile( "\t<td>Контр.р.</td>" );
                    SaveToFile( "\t<td>РГР</td>" );
                 //   SaveToFile( "\t<th></th>" );
                    SaveToFile( "\n</tr>" );
					SaveToFile( "\n</thead>\n" );
					SaveToFile( "<tbody>\n" );					
                    for (var i = 0; i<semestrCount; i++ ) {
                        SaveToFile( "\n<tr>\n" );
                        for (var j = 0; j<M; j++ ) {
                            SaveToFile( "\t<td>" + matrixA[i][j] + "</td>" );
                        }

                        SaveToFile( "\n</tr>" );
                    }
					SaveToFile( "\n</tbody>" );					
                    SaveToFile("\n</table>");

                    SaveToFile("\n</body>\n");
                    SaveToFile("</html>\n");
		
		//var opened = window.open("");
		//opened.document.write( HTMLcode );					
		$("#msg").html(HTMLcode);
		//$("#myTable").tablesorter();
		// Simply use this, second item in array is sort order (0 = ascending, 1 = descending):
		$("#myTable").tablesorter( {sortList: [[1,0],[0,0]]} ); 
		//document.getElementById( "msg"
		
};

DummyContentHandler.prototype.setDocumentLocator = function (locator) {
   // this.div.innerHTML += 'locator';
};


// INTERFACE: DeclHandler: http://www.saxproject.org/apidoc/org/xml/sax/ext/DeclHandler.html

DummyContentHandler.prototype.attributeDecl = function(eName, aName, type, mode, value) {
   // this.div.innerHTML += "attributeDecl [" + eName + "] [" + aName + "] [" + type + "] [" + mode + "] [" + value + "]<br/>";
};

DummyContentHandler.prototype.elementDecl = function(name, model) {
   // this.div.innerHTML += "elementDecl [" + name + "] [" + model + "]<br/>";
};

DummyContentHandler.prototype.externalEntityDecl = function(name, publicId, systemId) {
  //  this.div.innerHTML += "externalEntityDecl [" + name + "] [" + publicId + "] [" + systemId + "]<br/>";
};

DummyContentHandler.prototype.internalEntityDecl = function(name, value) {
  //  this.div.innerHTML += "internalEntityDecl [" + name + "] [" + value + "]<br/>";
};

// INTERFACE: LexicalHandler: http://www.saxproject.org/apidoc/org/xml/sax/ext/LexicalHandler.html

DummyContentHandler.prototype.comment = function(ch, start, length) {
  //  this.div.innerHTML += "comment [" + ch + "] [" + start + "] [" + length + "]<br/>";
};

DummyContentHandler.prototype.endCDATA = function() {
   // this.div.innerHTML += "endCDATA<br/>";
};

DummyContentHandler.prototype.endDTD = function() {
   // this.div.innerHTML += "endDTD<br/>";
};

DummyContentHandler.prototype.endEntity = function(name) {
  //  this.div.innerHTML += "endEntity [" + name + "]<br/>";
};

DummyContentHandler.prototype.startCDATA = function() {
  //  this.div.innerHTML += "startCDATA<br/>";
};

DummyContentHandler.prototype.startDTD = function(name, publicId, systemId) {
   // this.div.innerHTML += "startDTD [" + name + "] [" + publicId + "] [" + systemId + "]<br/>";
};

DummyContentHandler.prototype.startEntity = function(name) {
  //  this.div.innerHTML += "startEntity [" + name + "]<br/>";
};

// INTERFACE: EntityResolver: http://www.saxproject.org/apidoc/org/xml/sax/EntityResolver.html
// Could implement this by checking for last two arguments missing in EntityResolver2 resolveEntity() below
// DummyContentHandler.prototype.resolveEntity = function (publicId, systemId) {};

// INTERFACE: EntityResolver2: http://www.saxproject.org/apidoc/org/xml/sax/ext/EntityResolver2.html
DummyContentHandler.prototype.resolveEntity = function(name, publicId, baseURI, systemId) {
  //  this.div.innerHTML += "resolveEntity [" + name + "] [" + publicId + "] [" +baseURI + "] [" + systemId + "]<br/>";
};
DummyContentHandler.prototype.getExternalSubset = function(name, baseURI) {
  //  this.div.innerHTML += "getExternalSubset [" + name + "] [" + baseURI + "]<br/>";
};

// INTERFACE: DTDHandler: http://www.saxproject.org/apidoc/org/xml/sax/DTDHandler.html
DummyContentHandler.prototype.notationDecl = function (name, publicId, systemId) {
   // this.div.innerHTML += "name[" + name + "] [" + publicId + "] [" + systemId + "]<br/>";
};
DummyContentHandler.prototype.unparsedEntityDecl = function (name, publicId, systemId, notationName) {
   // this.div.innerHTML += "name[" + name + "] [" + publicId + "] [" + systemId + "] [" + notationName + "]<br/>";
};

// INTERFACE: ErrorHandler: http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
DummyContentHandler.prototype.warning = function(saxParseException) {
   // _serializeSaxParseException.call(this, saxParseException);
};
DummyContentHandler.prototype.error = function(saxParseException) {
  //  _serializeSaxParseException.call(this, saxParseException);
};
DummyContentHandler.prototype.fatalError = function(saxParseException) {
  //  _serializeSaxParseException.call(this, saxParseException);
};



// EXPORT
this.DummyContentHandler = DummyContentHandler;

}());