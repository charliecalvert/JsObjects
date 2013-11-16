CraftyDemo06
============

Description of CraftyDemo06.

Karma
-----

Karma is a test runner.

If you have karma running in one command window, you can run a test in another 
command window that will return immediately  by typing:

	karma run

Sites of Interest
-----------------

- [Wizards HitPoints](http://www.wizards.com/default.asp?x=dnd/glossary&term=Glossary_dnd_hitpoints&alpha=)

Changes
-------

- GameWrapper added
- Controller removed from ElfGame. Now it is just a factory, no controller.
- Removed GameBoard controller from index.html. We just reference that DIV by id now. See ElfGame.start().
- Includes code for working with hero and tower.

