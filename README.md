# Trippin'

This is a simple website for planning and recording reviews of vacations. The user can add a location, then specify if it is somewhere they have visited or somewhere they want to visit. If the location has been visited, they can add a review. If they haven't visited the location, it goes on their bucket list. The website can be viewed at http://sarah-story.github.io/trippin.

This project utilizes [RequireJS](http://requirejs.org/) for module management. It also uses the Google Maps API to get map images for each of the locations. 

##Getting Started

#####Clone the repo

```
git clone https://github.com/sarah-story/trippin.git
```

#####Install dependencies

``` 
cd ./trippin/lib
bower install
npm instal
```

#####Run a server

```
cd ..
python -m SimpleHTTPServer 8000
```

The website should be running on http://localhost:8000. If you make any changes, you can run grunt by:

```
cd ./lib
grunt
```

and it will check your JavaScript and compile your SASS
