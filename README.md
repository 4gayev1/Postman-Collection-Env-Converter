This package helps you change your Postman collections' environment just by specifying the paths of the folder or your collection and environment JSON files.

You can mention:

 * One collection and one environment JSON <br/>
 * One collection and many environment JSON files or vice versa <br/>
 * Many collections and many environment JSON files <br/>

**You can also put all of them in one or separate folders and mention folder directories.**

**The order of the paths (collection and environment or folder) does not matter.**
<br/>
<br/>
# Usage:<br/>
To use the package, first, you need to install it by running the command:

<i>You have to name your environment subdomain as envSubdomain, base URL as a baseUrl, and if you are using  API to generate a token then have to name it as tokenUrl</i>

```
npm i -g pmconverter
```
<br/>
Examples:
<br/>
<br/>
For One to One:

```
pmconvert <your-collection-path> <your-environment-path>
```

<br/>
For One to Many (The count of collections or environments does not matter):

```
pmconvert <your-collection-path> <your-environment-path> <your-environment-path>
```
Or
```
pmconvert <your-collection-path> <your-collection-path> <your-environment-path>
```

As mentioned above, the order does not matter:
```
pmconvert <your-collection-path> <your-collection-path> <your-environment-path>
```
<br/>
For Many to Many:

```
pmconvert <your-collection-path> <your-collection-path> <your-collection-path> <your-environment-path>
```
<br/>
For Folders:
<br/>

```
pmconvert <your-folder-path>
```

Or

```
pmconvert <your-collection-folder-path> <your-environment-folder-path>
```

<br/>
<br/>
You are good to run your new collections.
