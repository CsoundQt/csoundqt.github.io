Title: Contribute
Date: 2016-02-23
Lang: en


Testing and reporting errors
--------------- 

If you would like **CsoundQt** to become even better, the first thing to do is:

**please take time to report errors and feature requests in [CsoundQt issue tracker](https://github.com/CsoundQt/CsoundQt/issues)!**


It is even more valuable if you **build CsoundQt yourself**. It is not that hard also on OSX! There are extensive instructions on  <https://github.com/CsoundQt/CsoundQt/blob/master/BUILDING.md> and in [CsoundQt wiki](https://github.com/CsoundQt/CsoundQt/wiki).

&nbsp; 

Contribute to improve the code, examples or design
------------------

CsoundQt's sources are hosted in **[Github](https://github.com/CsoundQt/CsoundQt)**. Since version 0.9.2 the latest stable release is kept in ***master*** branch, the newest modifications and fixes in ***develop*** branch. To contribute to the development, please check out the *develop* branch. In Github you cans select the branch from menu (*Branch: master/develop*), in your computer use command

    $ git checkout -b develop origin/develop

to activate the develop branch firt time. 
To change between the branches use command *git checkout <branchname \>*

    $ git checkout develop # or: git checkout master


If you would like to add an example, correct some mistakes or work on improving or extending the source code, the best way is **forking the repository and making pull requests**:

1)Sign up or sign in to **Github**: <https://github.com/>

2) Go to repository <https://github.com/CsoundQt/CsoundQt> (or just search for CsoundQt).  In the upper part of page there is button **Fork**. Press it and a copy of the repository will be created under your account (like *tarmoj/CsoundQt*).

3) You can make smaller changes online - when you select a file on the github page, press on the pen-shaped **"Edit this file"** button and make your changes. After finishing editing, enter a comment about the change below in *Commit changes* box and press **Commit changes**. You can also add new files from scratch or upload files and commit them similar way.

4) If you have more serious work to do, you need to get the sources to your computer where you can write or edit code,  various files, test and when happy with the result, send it back to your github repository. To do that:

* you need git versioning system software and some knowledge how to use it. See <https://git-scm.com/>
* getting the sources from github to your computer is called "cloning" in git terms. Go to the direcotry where you want to have the local repository and execute in terminal:
```
    $ git clone https://github.com/tarmoj/CsoundQt.git # replace it with your address, of course
``` 

* When your changes are done, you need to commit the changes to your local repository (it is easy to do in QtCreator in Tools->Git->Local repository->Commit). For command line see <https://git-scm.com/docs/git-commit> For example:
```
    $ git add 'file_you_changed'
    $ git commit -m "some meaningful message about the change"
    
```
* Sending your changes to the remote repository (i.e the one by your account in Github) is called **pushing**:
```
    $ git push
```    
* Next time you want to get the newest version from github again (if there has been is a change), you don't need to clone, just getting the change information is called **pulling**:
```
    $ git pull
```    
5) To integrate your changes to the main CsoundQt repo, you need to do so called **pull request** -  it means that the manager(s) of the main repo get infomration about your work and  can merge it easily to the main sources and everybody can enjoy the result of your effort. Just click on the **"Pull request"** button on your Github repo's main page, add a comment and send it.

&nbsp; 

Improve the webpage
-------------------

Also CsoundQt's webpage is hosted in github and you can use similar forking and making pull requests system as with the main code. Have a look at instructions on <https://github.com/CsoundQt/csoundqt.github.io/blob/master/README.md>



&nbsp; 

Support CsoundQt
-------------------

If you find CsoundQt useful, please consider making a donation:

 <a href="http://sourceforge.net/donate/index.php?group_id=227265"><img src="http://images.sourceforge.net/images/project-support.jpg" alt="Support This Project" border="0" height="32" width="88"> </a>
