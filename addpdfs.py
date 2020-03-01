import os, sys
import shutil, stat

#import base64
#from Foundation import *

# Don't need this function (yet)
#def decode_bdisk(key):
#    """Return the relative path of file referenced by key """
#    decodedBytes = base64.b64decode(key)
#    nsData = NSData.dataWithBytes_length_(decodedBytes, len(decodedBytes))
#    plist, fmt, error \
#    = NSPropertyListSerialization\
#      .propertyListFromData_mutabilityOption_format_errorDescription_(\
#      nsData, 0, None, None)
#    if plist is None:
#        print "key: %s" % key
#        print "failed to decode archive due to error: %s" % (error)
#        exit(1)
#    return plist('relativePath')

homeDir = '/Users/carlosmalt'
webSite = homeDir + '/git/carlosmalt/ucsc-homepage'
pubDir = webSite + '/content/publication'
paperDir = homeDir + '/gd/Papers'
paperSubDirs = {'e': 'E-F', 'f': 'E-F', 'i': 'I-J', 'j': 'I-J', 'n': 'N-O', 
        'o': 'N-O', 'q': 'Q-R', 'r': 'Q-R', 'u': 'U-V', 'v': 'U-V', 'x': 'X-Z', 
        'y': 'X-Z', 'z': 'X-Z'}

# copy paper pdfs from their paper directory into their pubName direcory
pubNames = os.listdir(pubDir)
for pubName in pubNames:
    if pubName == '_index.md': continue
    pubNameComps = pubName.split('-')
    pdfName = str.join('-', pubNameComps[:2]) + \
            str.join('', pubNameComps[2:]) + '.pdf'
    firstAuthorLetter = pdfName[0]
    if firstAuthorLetter in paperSubDirs:
        paperSubDir = paperSubDirs[firstAuthorLetter]
    else:
        paperSubDir = firstAuthorLetter.upper()
    src = '%s/%s/%s' % (paperDir, paperSubDir, pdfName)
    dst = '%s/%s/%s.pdf' % (pubDir, pubName, pubName)
    try:
        shutil.copy2(src, dst)
        os.chmod(dst, stat.S_IRUSR | stat.S_IRGRP | stat.S_IROTH)
    except IOError: 
        print('%s not found or already moved' % src)
