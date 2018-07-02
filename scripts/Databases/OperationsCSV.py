import os

def downloadBaseLinux(self):
    os.system("wget -c " + str(self.link))

