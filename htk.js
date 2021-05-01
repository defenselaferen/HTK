// some flags for configuration
// section for application
const H_APPLICATION_DIV     = 0x00FF1;
const H_APPLICATION_SECTION = 0x00FF2;

// section for window
const H_WINDOW_DIV     = 0x0AA1;
const H_WINDOW_SECTION = 0x0AA2;

// section for window
const H_CONTAINER_DIV     = 0x0BB1;
const H_CONTAINER_SECTION = 0x0BB2;

// section for elements of html
// section from elements for h tag
const H_H1 = 0x0AB1;
const H_H2 = 0x0AB2;
const H_H3 = 0x0AB3;
const H_H4 = 0x0AB4;
const H_H5 = 0x0AB5;
const H_H6 = 0x0AB6;

// section for list
const H_UL = 0x0AC1;
const H_LI = 0x0AC2;
const H_OL = 0x0AC3;
const H_DT = 0x0AC4;
const H_DD = 0x0AC5;

// section for paragraph
const H_P       = 0x0AD1;
const H_SPAN    = 0x0AD2;
const H_STRONG  = 0x0AD3;

// for giving into contructor like variable
function htk_application_new(some_element_string, _FLAGS_) {
	let struct_variable = {
		type: "htk_application_new_return",
		project: some_element_string,
		flags: _FLAGS_
	};
	
	return struct_variable;
}

// for giving into contructor like variable
function htk_window_new(some_element_string, _FLAGS_) {
	let struct_variable = {
		type: "htk_window_new_return",
		project: some_element_string,
		flags: _FLAGS_
	};
	
	return struct_variable;
}

// for giving into contructor like variable
function htk_elements_new(some_element_string, _FLAGS_) {
	let struct_variable = {
		type: "htk_elemets_new_return",
		project: some_element_string,
		flags: _FLAGS_
	};
	
	return struct_variable;
}

function _CHECK_SIGNAL_HELPER(Htk_come, its_what) {
	const signal_accept = [
		"HtkApplication", "HtkWindow", "HtkContainer",
		"HtkElements"
	]; // what type in accepting in this function now
	
	let its_valid = false;
	for(let i = 0; i < signal_accept.length; i++) {
		try {
			if(Htk_come.type == signal_accept[i]) {
				its_valid = true;
			}
		}
		
		// if this not have type;
		catch(err) {
			its_valid = false;
			throw Error("HTK+ Can't know this type: " + Htk_come);
		}
	}
	
	
	switch(its_valid) {
		case true: {
			const conditions = [
				"deactivate", "activate"	
			]; // giving array conditions
			
			let validation = false;
			for(let i = 0; i < conditions.length; i++) {
				if(conditions[i] == Htk_come.its_what) {
					validation = true;
				}
			}
			
			switch(validation) {
				case false: {
					throw Error("HTK+ Can't know the type: " + Htk_come.type);
				}
				break;
			}
			
			if(its_what == Htk_come.its_what) {
				return 0x001;
			} else {
				return 0x002;
			}
		}
		break;
		case false: {
			throw Error("HTK+ Can't know this type: " + Htk_come.type);
		}
		break;
	}
}

function h_signal_connect(Htk_come, its_what, callback) {
	if(_CHECK_SIGNAL_HELPER(Htk_come, its_what) == 0x001) {
		callback(Htk_come, Htk_come.settings);
	}
}

function h_window_set_default_size(Htk_come, number_id, string_width, string_height) {
	if(_CHECK_SIGNAL_HELPER(Htk_come, "activate") == 0x001) {
		Htk_come.heap.elements[number_id - 1].value.style.width = string_width;
		Htk_come.heap.elements[number_id - 1].value.style.height = string_height;
	}
}

function h_application_append(Htk_come, query) {
	if(_CHECK_SIGNAL_HELPER(Htk_come, "activate") == 0x001) {
		/* TODO: In this script */
		Htk_come.heap.elements.push({
			id: Htk_come.heap.elements.length,
			value: document.createElement(Htk_come.htmlType)
		});
		
		Htk_come.heap.elements[Htk_come.heap.elements.length - 1].value.setAttribute("class", Htk_come.settings.project);
		query.appendChild(
			(Htk_come.heap.elements[Htk_come.heap.elements.length - 1].id == (Htk_come.heap.elements.length - 1)) 
			? Htk_come.heap.elements[Htk_come.heap.elements.length - 1].value : document.createElement("div"));
	}
}

function h_window_set_title(Htk_come, string_title) {
	if(_CHECK_SIGNAL_HELPER(Htk_come, "activate") == 0x001) {
		document.title = string_title;
	}
}

// class for elemets h
class Htk_Elements_H {
	constructor(htk_element_new_coming) {
		this.type = "HtkElements";
		this.htmlType = "div";
		this.its_what = "activate";
		this.settings = {};
		this.heap = {
			elements: []
		};

		try {
			if(htk_element_new_coming.type == "htk_elemets_new_return") {
				this.settings.project = htk_element_new_coming.project;
				this.settings.flags = htk_element_new_coming.flags;
				switch (htk_element_new_coming.flags) {
					case H_H1: {
						this.htmlType = "h1";
					}
					break;
					case H_H2: {
						this.htmlType = "h2";
					}
					break;
					case H_H3: {
						this.htmlType = "h3";
					}
					break;
					case H_H4: {
						this.htmlType = "h4";
					}
					break;
					case H_H5: {
						this.htmlType = "h5";
					}
					break;
					case H_H6: {
						this.htmlType = "h6";
					}
					break;
					default: {
						throw Error("Can't know what it's: " + htk_element_new_coming.flags);
					}
					break;
				}
			}
		}
		
		// if the type it's not in declare
		catch(err) {
			throw Error("Give the parameter from htk_elements_new function");
		}
	}
};

// class for elemets h
class Htk_Elements_List {
	constructor(htk_element_new_coming) {
		this.type = "HtkElements";
		this.htmlType = "div";
		this.its_what = "activate";
		this.settings = {};
		this.heap = {
			elements: []
		};

		try {
			if (htk_element_new_coming.type == "htk_elemets_new_return") {
				this.settings.project = htk_element_new_coming.project;
				this.settings.flags = htk_element_new_coming.flags;
				switch (htk_element_new_coming.flags) {
					case H_LI: {
						this.htmlType = "li";
					}
						break;
					case H_UL: {
						this.htmlType = "ul";
					}
						break;
					case H_DD: {
						this.htmlType = "dd";
					}
						break;
					case H_DT: {
						this.htmlType = "dt";
					}
						break;
					case H_OL: {
						this.htmlType = "ol";
					}
						break;
					default: {
						throw Error("Can't know what it's: " + htk_element_new_coming.flags);
					}
						break;
				}
			}
		}

		// if the type it's not in declare
		catch (err) {
			throw Error("Give the parameter from htk_elements_new function");
		}
	}
};

// class for elemets h
class Htk_Elements_Text {
	constructor(htk_element_new_coming) {
		this.type = "HtkElements";
		this.htmlType = "div";
		this.its_what = "activate";
		this.settings = {};
		this.heap = {
			elements: []
		};

		try {
			if (htk_element_new_coming.type == "htk_elemets_new_return") {
				this.settings.project = htk_element_new_coming.project;
				this.settings.flags = htk_element_new_coming.flags;
				switch (htk_element_new_coming.flags) {
					case H_P: {
						this.htmlType = "p";
					}
						break;
					case H_SPAN: {
						this.htmlType = "span";
					}
						break;
					case H_STRONG: {
						this.htmlType = "strong";
					}
						break;
					default: {
						throw Error("Can't know what it's: " + htk_element_new_coming.flags);
					}
						break;
				}
			}
		}

		// if the type it's not in declare
		catch (err) {
			throw Error("Give the parameter from htk_elements_new function");
		}
	}
};

// class like make variable in C++
class HtkApplication {
	constructor(htk_application_new_coming) {
		this.type = "HtkApplication";
		this.htmlType = "div";
		this.its_what = "activate";
		this.settings = {};
		this.heap = {
			elements: []
		};
		this.child_one = [];
		
		try {
			if(htk_application_new_coming.type == "htk_application_new_return") {
				this.settings.project = htk_application_new_coming.project;
				this.settings.flags = htk_application_new_coming.flags;
				switch (htk_application_new_coming.flags) {
					case H_APPLICATION_DIV: {
						this.htmlType = "div";
					}
					break;
					case H_APPLICATION_SECTION: {
						this.htmlType = "section";
					}
					break;
					default: {
						throw Error("Can't know what it's: " + htk_application_new_coming.flags);
					}
					break;
				}
			}
		}
		
		// if the type it's not in declare
		catch(err) {
			throw Error("Give the parameter from htk_application_new function");
		}
	}
};

// class like make variable in C++
class HtkWindow {
	constructor(htk_application_new_coming) {
		this.type = "HtkWindow";
		this.htmlType = "div";
		this.its_what = "activate";
		this.settings = {};
		this.heap = {
			elements: []
		};
		
		try {
			if(htk_application_new_coming.type == "htk_window_new_return") {
				this.settings.project = htk_application_new_coming.project;
				this.settings.flags = htk_application_new_coming.flags;
				switch (htk_application_new_coming.flags) {
					case H_WINDOW_DIV: {
						this.htmlType = "div";
					}
					break;
					case H_WINDOW_SECTION: {
						this.htmlType = "section";
					}
					break;
					default: {
						throw Error("Can't know what it's: " + htk_application_new_coming.flags);
					}
					break;
				}
			}
		}
		
		// if the type it's not in declare
		catch(err) {
			throw Error("Give the parameter from htk_window_new function");
		}
	}
};

// make child of application
function h_application_child_of(Htk_come, Htk_window_come) {
	if(_CHECK_SIGNAL_HELPER(Htk_come, "activate") == 0x001) {
		if(_CHECK_SIGNAL_HELPER(Htk_window_come, "activate") == 0x001) {
			Htk_come.child_one.push(Htk_window_come);
		}
	}
}

// make child group in window
function h_window_make_group(Htk_window_come) {
	if(_CHECK_SIGNAL_HELPER(Htk_window_come, "activate") == 0x001) {
		Htk_window_come.heap.elements.push({
			id: Htk_window_come.heap.elements.length,
			value: document.createElement(Htk_window_come.htmlType)
		});

		Htk_window_come
		.heap
		.elements[Htk_window_come.heap.elements.length - 1]
		.value
		.setAttribute("class", Htk_window_come.settings.project);
	}
}

// make show elements
function h_show_all_application(Htk_come) {
	if(_CHECK_SIGNAL_HELPER(Htk_come, "activate") == 0x001) {
		// make sorting of elemets with id
		for(let k = 0; k < Htk_come.child_one.length; k++) {
			let len = Htk_come.child_one[k].heap.elements.length - 1;
			for (let i = 0; i < len; i++) {
				for (let j = 0; j < len; j++) {
					if (Htk_come.child_one[k].heap.elements[j].id > 
						(Htk_come.child_one[k].heap.elements[j + 1].id == undefined) ? 
						0 : Htk_come.child_one[k].heap.elements[j + 1].id) {
						let tmp = Htk_come.child_one[k].heap.elements[j];
						Htk_come.child_one[k].heap.elements[j] = Htk_come.child_one[k].heap.elements[j + 1];
						Htk_come.child_one[k].heap.elements[j + 1] = tmp;
					}
				}
			}
		}

		// appendChild of application
		for(let i = 0; i < Htk_come.heap.elements.length; i++) {
			for(let k = 0; k < Htk_come.child_one.length; k++) {
				for(let j = 0; j < Htk_come.child_one[k].heap.elements.length; j++) {
					Htk_come.heap.elements[i].value.appendChild(
						Htk_come.child_one[k].heap.elements[j].value);
				}
			}
		}
	}
}

// class for container
class Container {
	constructor(htk_container_new_coming) {
		this.type = "HtkContainer";
		this.htmlType = "div";
		this.its_what = "activate";
		this.settings = {};
		this.heap = {
			elements: []
		};
		
		try {
			if(htk_container_new_coming.type == "htk_container_new_return") {
				this.settings.project = htk_container_new_coming.project;
				this.settings.flags = htk_container_new_coming.flags;
				switch (htk_container_new_coming.flags) {
					case H_CONTAINER_DIV: {
						this.htmlType = "div";
					}
					break;
					case H_CONTAINER_SECTION: {
						this.htmlType = "section";
					}
					break;
					default: {
						throw Error("Can't know what it's: " + htk_container_new_coming.flags);
					}
					break;
				}
			}
		}
		
		// if the type it's not in declare
		catch(err) {
			throw Error("Give the parameter from htk_container_new function");
		}
	}
};

// adding element in container
function add_container(Htk_container_come) {
	if(_CHECK_SIGNAL_HELPER(Htk_container_come, "activate") == 0x001) {
		Htk_container_come.heap.elements.push({
			id: Htk_container_come.heap.elements.length,
			value: document.createElement(Htk_container_come.htmlType)
		});

		Htk_container_come.heap.elements[Htk_container_come.heap.elements.length - 1]
		.value.setAttribute("class", Htk_container_come.settings.project);
	}
}

// adding element in elemets class_h
function add_h_class(Htk_elements_h_come, string_text) {
	if(_CHECK_SIGNAL_HELPER(Htk_elements_h_come, "activate") == 0x001) {
		Htk_elements_h_come.heap.elements.push({
			id: Htk_elements_h_come.heap.elements.length,
			value: document.createElement(Htk_elements_h_come.htmlType)
		});

		let node = document.createTextNode(string_text);
		Htk_elements_h_come.heap.elements[Htk_elements_h_come.heap.elements.length - 1]
		.value.appendChild(node);

		Htk_elements_h_come.heap.elements[Htk_elements_h_come.heap.elements.length - 1]
		.value.setAttribute("class", Htk_elements_h_come.settings.project);
	}
}

// adding element in elemets class_text
function add_text_class(Htk_elements_h_come, string_text) {
	if (_CHECK_SIGNAL_HELPER(Htk_elements_h_come, "activate") == 0x001) {
		Htk_elements_h_come.heap.elements.push({
			id: Htk_elements_h_come.heap.elements.length,
			value: document.createElement(Htk_elements_h_come.htmlType)
		});

		let node = document.createTextNode(string_text);
		Htk_elements_h_come.heap.elements[Htk_elements_h_come.heap.elements.length - 1]
			.value.appendChild(node);

		Htk_elements_h_come.heap.elements[Htk_elements_h_come.heap.elements.length - 1]
			.value.setAttribute("class", Htk_elements_h_come.settings.project);
	}
}


// adding list child in window
function push_window(Htk_window_come, Htk_container_come, number_id_window = 1, number_id_container = 1) {
	Htk_window_come.heap.elements[number_id_window - 1].value.appendChild(
		Htk_container_come.heap.elements[number_id_container - 1].value);
}

// make function for container class
function htk_container_new(some_element_string, _FLAGS_) {
	let struct_variable = {
		type: "htk_container_new_return",
		project: some_element_string,
		flags: _FLAGS_
	};
	
	return struct_variable;
}

// make settings of body tag
function htk_settings_root_window(padding = "0", margin = "0", overflow_x = "hidden", overflow_y = "scroll") {
	const Body = document.querySelector("body");
	(padding == "0") ? Body.style.padding = padding : Body.style.padding = padding;
	(margin == "0") ? Body.style.margin = padding : Body.style.margin = padding;
	Body.style.overflowX = overflow_x;
	Body.style.overflowY = overflow_y;
}

function htk_init(callback_main_function) {
	callback_main_function();
}
