add = () => {
    var userTitle = document.getElementById("userTitle");
	var value = userTitle.value;
    var userDesc = document.getElementById('userDesc');
    var descVal = userDesc.value;
	if(value.length > 3 && descVal.length > 3){
        var lists = document.getElementById("lists");
        var mainDiv = document.createElement('div');
        mainDiv.classList.add('col-lg-3','mx-4','my-4','main-div');

        var listsDiv = document.createElement('div');
        listsDiv.classList.add('lists_div');

        var cards = document.createElement('div');
        cards.classList.add('cards');

        var titleDiv = document.createElement('div');
        titleDiv.classList.add('title');

        var title = document.createElement('h3');
        title.classList.add('text-center');
        var title_text = document.createTextNode(value);
        title.append(title_text);

        var hr = document.createElement('hr');

        var descDiv = document.createElement('div');
        descDiv.classList.add('desc');
        
        var desc = document.createElement('h5');
        desc.append(document.createTextNode(descVal));


        var btnDiv = document.createElement('div');
        btnDiv.classList.add('btns');

        var editIcon = document.createElement('i');
        editIcon.classList.add('fa','fa-pencil','btn','btn-primary','mt-2');
        editIcon.setAttribute('onclick','editRow(this)');

        var deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fa','fa-trash','btn','btn-danger','mt-2','ml-2');
        deleteIcon.setAttribute('onclick','deleteRow(this)');
        
        titleDiv.append(title);
        titleDiv.append(hr);
        cards.append(titleDiv);
        descDiv.append(desc);
        cards.append(descDiv);
        cards.append(editIcon);
        cards.append(deleteIcon);
        listsDiv.append(cards);
        mainDiv.append(listsDiv);
        lists.append(mainDiv);
        console.log(mainDiv);
        userTitle.value = "";
        userDesc.value = "";
    }
    else{
        alert("Minimum 4 characters required");
    }
}

deleteRow = (btn) => {
    btn.parentElement.parentElement.parentElement.remove();
}

editRow = (btn) => {
    var title = prompt("Enter title",btn.previousSibling.previousSibling.childNodes[0].innerHTML);
    var desc = prompt("Enter description",btn.previousSibling.childNodes[0].innerHTML);
    if(title.length > 3 && desc.length > 3){
        btn.previousSibling.previousSibling.childNodes[0].innerHTML = title;
        btn.previousSibling.childNodes[0].innerHTML = desc;
    }
    else{
        alert("Minimum 4 characters required");
    }
}

deleteAll = () => {
    var lists = document.getElementById('lists');
    lists.innerHTML = "";
}