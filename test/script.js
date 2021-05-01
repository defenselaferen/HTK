// function section_one_activate
function section_one_activate(section_one, settings) {
	h_window_make_group(section_one);
}

// function container_one_activate
function container_one_activate(container_one, settings) {
	add_container(container_one);
}

// function title_one_h1_activate
function title_one_h1_activate(title_one_h1, settings) {
	add_h_class(title_one_h1, "HTK+");
}

// function description_one_activate
function description_one_activate(description_one, settings) {
	add_text_class(description_one, "Hello, World");
}

// function root_window_activate
function root_window_activate(root_window, settings) {
	h_application_append(root_window, document.getElementById("root"));
	h_window_set_default_size(root_window, 1, "100vw", "100vh");

	let section_one = new HtkWindow(htk_window_new("section_one", H_WINDOW_SECTION));
	h_signal_connect(section_one, "activate", section_one_activate);

	let container_one = new Container(htk_container_new("container_one", H_CONTAINER_DIV));
	h_signal_connect(container_one, "activate", container_one_activate);

	let title_one_h1 = new Htk_Elements_H(htk_elements_new("title_one_h1", H_H1));
	h_signal_connect(title_one_h1, "activate", title_one_h1_activate);

	let description_one = new Htk_Elements_Text(htk_elements_new("description_one", H_P));
	h_signal_connect(description_one, "activate", description_one_activate);

	push_window(section_one, container_one, 1, 1);
	push_window(container_one, title_one_h1, 1, 1);
	push_window(container_one, description_one, 1, 1);

	h_application_child_of(root_window, section_one);
	h_show_all_application(root_window);
}

// function main
function main() {
	let root_window = new HtkApplication(htk_application_new("root_window", H_APPLICATION_DIV));
	h_window_set_title(root_window, "HTK+");
	htk_settings_root_window();

	h_signal_connect(root_window, "activate", root_window_activate);
}

// init for calling the main function
htk_init(main);