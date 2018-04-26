## Identity usability testing prototype

This Jekyll application allows designers to rapidly prototype and test interfaces for `identity-idp` without having to deal with the complexities of a DB-driven rails application.

### Dependencies

- Ruby 2.5.1
- [Jekyll](http://jekyllrb.com)
  
### Local Setup

After cloning the project to your local machine, complete the following setup steps from the project's root directory.

#### Install RVM (optional) 

If you are running multiple ruby applications on your local machine, it is recommended that you use a ruby version manager to manage the unqiue ruby requirements for each project. 

To download and install RVM, follow the installation instructions for your environment on [rvm.io](https://rvm.io/rvm/install)

After installing RVM, run the following commands to install the correct version of ruby for this project.

```
$ rvm install 2.5.1
```
```
$ rvm use 2.5.1
```

Confirm that you are now using the correct version of ruby by running

```
$ ruby -v
```


#### Install Bundler and Jekyll

After setting up ruby, install bundler to manage the gems this project requires and install jekyll to manage the site.

```
$ gem install bundler jekyll
```

Now install the additional gems using bundler

```
$ bundle install
```

You should now be able to start the site using

```
$ jekyll serve
```

By default the site will run on `http://localhost:4000` 

After doing this, Jekyll will run in the background until you cancel it (by closing the terminal or hitting ctrl-C) so if you need to run additional commands (like `git` commands) it may be a good idea to open up a second terminal window. 


### License

This project is in the worldwide [public domain](LICENSE.md).   As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within   the United States, and copyright and related rights in the work worldwide are waived through   the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).  
>
> All contributions to this project will be released under the CC0 dedication. By submitting a   pull request, you are agreeing to comply with this waiver of copyright interest.
