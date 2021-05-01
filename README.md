# HTK+

HTK+ is a front end framework for website development through the javascript programming language.
Like GTK+. HTK+ is arguably a bit similar to GTK+. but there are several things that make it different.
First is the structure of the programming language. HTK+ is taken from GTK+, whose programming language is C++.
The second difference is that the syntax on HTK+ is a little different from GTK+.

## List

List syntax functions in HTK +:
```javascript
function htk_init(callback_main_function: <Function>);
```
It's uses: To call a function to make the structure like C/C++.

```javascript
function htk_settings_root_window(padding = "0": <String>, 
                                  margin = "0" <String>, 
                                  overflow_x = "hidden" <String>,
                                  overflow_y = "scroll" <String>);
```
It's uses: Its purpose is to set the body tag. If no parameter is given then HTK + defaults to setting the body tag.

```javascript
function htk_application_new(some_element_string: <String>,
                             _FLAGS_: <Number>);
```
It's uses: This is used to fill a variable from the class that will be used later which is called HtkApplication.

```javascript
function htk_window_new(some_element_string: <String>,
                        _FLAGS_: <Number>);
```
It's uses: This is used to fill a variable from the class that will be used later which is called HtkWindow.

```javascript
function htk_elements_new(some_element_string: <String>,
                          _FLAGS_: <Number>);
```
It's uses: This is used to fill a variable from the class that will be used later which is called HtkElments.

```javascript
function h_signal_connect(Htk_come, its_what: <HTK_CLASS>,
                          callback: <Function>);
```
It's uses:
