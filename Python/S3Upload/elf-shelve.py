import shelve

class glacier_shelve(object):
    """
    Context manager for shelve
    """

    def __enter__(self):
        SHELVE_FILE = 'foo'
        self.shelve = shelve.open(SHELVE_FILE)

        return self.shelve

    def __exit__(self, exc_type, exc_value, traceback):
        self.shelve.close()
