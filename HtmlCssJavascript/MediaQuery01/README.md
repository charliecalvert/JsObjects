Media Query Basics
==================

In the example in which you link in three different css files, 
your media queries should all be in the HTML, and not in the CSS.

Here is the code to put in your HTML when you want to link
in three separate HTML files with different one's linked in 
as the browser is resized:

```
    <link rel='stylesheet' media='screen and (min-width: 1025px) and (max-width: 2800px)' href='Large.css' />
    <link rel='stylesheet' media='screen and (min-width: 701px) and (max-width: 1024px)' href='Medium.css' />
    <link rel='stylesheet' media='screen and (min-width: 10px) and (max-width: 700px)' href='Small.css' />
```

When you do this, then you should not put any media queries in the stylesheet:

```
body {
	background-color: #0000FF;
}
```

But when you link in one stylesheet, then you need to put all three 
queries in that style sheet:

```
/* Default */
body {
	background-color: #0088FF;
	color: #FFFFFF;
}

/* Medium */
@media screen and (max-width: 1024px) {
	body {
		background-color: #00FF00;
		color: #006600;
	}
}

/* Small */
@media screen and (max-width: 520px) {
	body {
		background-color: #FF0000;
		color: #440000;
	}
}	
```

When working in one CSS file, don't put selectors for 
the table outside of any of the media queries. That would
cause the colors for the table to fail to change as you 
resize the page:

```
.position01 {
    width: 50px;
    height: 50px;
    background-color: #FF0000;
    font-weight:bold;
}

.position02 {
    width: 50px;
    height: 50px;
    background-color: #88FF88;
    font-weight:bold;
}

.position03 {
    width: 50px;
    height: 50px;
    background-color: #5555FF;
    font-weight:bold;
}
```

To make it work right, you need to include them inside 
the queries, and then the page's colors change so that 
we see blue shades when the browser is large, green when
it is medium size, and red when small:

```
/* Medium */
@media screen and (max-width: 1024px) {
	body {
		background-color: #00FF00;
		color: #006600;
	}
	.position01 {
		width: 50px;
		height: 50px;
		background-color: #00FF00;
		font-weight:bold;
	}

	.position02 {
		width: 50px;
		height: 50px;
		background-color: #00BB00;
		font-weight:bold;
	}

	.position03 {
		width: 50px;
		height: 50px;
		background-color: #008800;
		font-weight:bold;
	}
}
@media screen and (max-width: 520px) {
	body {
		background-color: #FF0000;
		color: #006600;
	}
	.position01 {
		width: 50px;
		height: 50px;
		background-color: #AA0000;
		font-weight:bold;
	}

	.position02 {
		width: 50px;
		height: 50px;
		background-color: #CC0000;
		font-weight:bold;
	}

	.position03 {
		width: 50px;
		height: 50px;
		background-color: #880000;
		font-weight:bold;
	}
}
```