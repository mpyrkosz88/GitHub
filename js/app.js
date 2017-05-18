$(function() {
    // variables for url
    var search_text = $('#search_text');
    var search_button = $('#search_button');

    search_button.on('click', function() {

        if (search_text.val().length > 2) {

            var search_url = 'https://api.github.com/search/repositories?q=' + search_text.val();
            console.log(search_text.val().length);

            //variables for main ul list
            var search_list = $('#search_list');
            search_list.empty();
            /* Insert Movies to DOM  */
            function insertContent(datas) {
                $.each(datas, function(index, data) {
                    if (index < 10) {
                        var li = $('<li>');
                        var url_link = $('<a class = "url_link" target ="_blank">').attr('href', data.owner.html_url )
                        var icon = $('<div class = "icon">');
                        var img = $('<img>').attr('src', data.owner.avatar_url);
                        var li_content = $('<div class = "li_content">')
                        var h4_el = $('<h4>').text(data.name);
                        var p_el = $('<p>').text(data.full_name);
                        search_list.append(li);
                        li.append(url_link);
                        url_link.append(icon);
                        icon.append(img);
                        url_link.append(li_content);
                        li_content.append(h4_el);
                        li_content.append(p_el);
                    } else {
                        return false;
                    }
                });
            }

            /* Search API and insert them into the DOM
  */
            search();

            function search() {
                console.log(search_url);
                $.ajax({url: search_url}).done(function(response) {
                    insertContent(response.items);
                }).fail(function(error) {
                    console.log(error);
                });
            }
        } else {
            alert('Musisz wpisać conajmniej 3 znaki')
        }

    })

});
