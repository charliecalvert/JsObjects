#! /usr/bin/env python3.3

import os
import sys
import elfutils.elffiles as elffiles
from elfutils.MarkdownToHtml import MarkdownToHtml

# Site Root
stackEditFrom=os.environ['HOME'] + '/Dropbox/StackEdit'
bcTo='/var/www/bc'
normalHtml = 0
revealHtml = 1


# process and Copy the files
def makeItSo(markdown, folder, files, technique = normalHtml):
	markdown.copyFrom = stackEditFrom
	markdown.destination = bcTo
	elffiles.ensureDir(markdown.destination)
	if technique == revealHtml:
		markdown.runReveal(files);
	else:
		markdown.runner(files, ['StartLinux.html', 'NavLinux.html', 'footer.html', 'end.html']);



# Prog270
def prog280(markdown):
	files = ["DropBox", "MongoMark", "index"];
	makeItSo(markdown, "", files);


# Run Program
markdown = MarkdownToHtml()
prog280(markdown)
