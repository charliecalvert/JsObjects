    def parse(self):
        contents = self.openFile()
        m = re.findall(self.regEx, contents, re.MULTILINE)
        for g in m:
            print g
            
    def parseIter(self):
        contents = self.openFile()
        result = re.finditer(self.regEx, contents, flags=re.DOTALL)
        for m in result:
            data = self.replace(m)
            print data
            #print '%02d-%02d: %s' % (m.start(), m.end(), m.group(0))
            #print data;
