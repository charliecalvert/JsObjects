Reformat Paragraphs
-------------------

This program replaces all the <p> elements in an
HTML document that span multiple lines with <p>
elements that are on one line.

Suppose you had a paragraph that looked like this:

<p>This is
the sample
paragraph.</p>

The program would turn it into this:

<p>This is the sample paragraph.</p>

To run the program type:

	python replace.py [MyFile.html]

For instance: 

	python replace.py MediaWiki.html. 
	
The output will be a copy of MediaWiki.html with all
the <p> elements on one line. To write the file to disk, 
write the following: 

	python replace.py MediaWiki.html > Result.html