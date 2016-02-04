# CsoundQt web site


##To change the site:



* Get the source:

`git clone https://github.com/CsoundQt/csoundqt.github.io.git` 

or fork the repository to your github account.


* Edit or add .rst or .md files in folder **content**.

* You need [Pelican](http://docs.getpelican.com/en/3.6.3/index.html) and its youtube plugin to convert the content files to web page

`$ sudo pip install pelican     
$ sudo pip install pelican-youtube`

* go to folder **manage** and use
`make publish` to create the html output in the root directory. See `make help` for more options. *(`make github` and other uploading commands do not work now).*

* commit your changes and push to git.  Make pull request via your github account, if you forked the repository.


Site created by Andrés Cabrera      
Current maintenance: Tarmo Johannes <trmjhnns@gmail.com> and others.



