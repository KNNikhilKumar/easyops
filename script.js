let rowElements=[];
function addRow()
{
    let size=$('tr').length-1;
    console.log(size);
    let tbody=document.getElementById('tbody');
    let fname=$('#first').val();
    let lname=$('#last').val();
    let number=$('#phno').val();
    let extele=rowElements.filter(function(ele)
    {
        if(ele.name==(fname+' '+lname)||ele.numb == number) return ele;
    });
    console.log(extele);
    //post request is not made so required didnt work hence adding an alert
    if((fname+lname).length==0||number.length==0)
    {
        alert('enter all inputs');
    }
    else if(extele.length!=0)
    {
        alert('entry cannot be added check phno and name');
    }
    else
    {
        let newele={name:fname+' '+lname,numb:number};
        rowElements.push(newele);
        let tr=document.createElement('tr');
        tr.id=number;
        let td1=document.createElement('td');
        let td2=document.createElement('td');
        td2.className="personname"
        let td3=document.createElement('td');
        let td4=document.createElement('td');
        td4.innerHTML='<input type="button" value="delete" name="addbutton" onclick="deleterow(this)">';
        td1.innerHTML=(size+1)+'';
        td2.innerHTML=fname+' '+lname;
        td3.innerHTML=number;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        $('tbody').append(tr);
    }
}


function deleterow(row)
{
    alert('are you sure to delete?');
    let s=row.parentNode.parentNode;
    let delrow=s.id;
    rowElements=rowElements.filter(function(ele)
    {
        if(ele.numb != delrow) return ele;
    });
    console.log(rowElements);
    s.parentNode.removeChild(s);
    let rows=document.getElementsByTagName('tr');
    for(let i=1;i<rows.length;i++)
    {
        rows[i].getElementsByTagName('td')[0].innerHTML=""+(i);
    }
}


function sortNames()
{
    rowElements.sort((a, b) => {
        let fa = a.name,
            fb = b.name;
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
    let oldtable=document.getElementsByTagName('tbody');
    oldtable[0].parentNode.removeChild(oldtable[0]);
    let newbody=document.createElement('tbody');
    for(let i=0;i<rowElements.length;i++)
    {
        let newele={name:rowElements[i].name,numb:rowElements[i].numb};
        let tr=document.createElement('tr');
        tr.id=rowElements[i].numb;
        let td1=document.createElement('td');
        let td2=document.createElement('td');
        let td3=document.createElement('td');
        let td4=document.createElement('td');
        td4.innerHTML='<input type="button" value="delete" name="addbutton" onclick="deleterow(this)">';
        td1.innerHTML=(i+1)+'';
        td2.innerHTML=newele.name;
        td2.className="personname"
        td3.innerHTML=newele.numb;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        newbody.appendChild(tr);
    }
    document.getElementsByTagName('table')[0].appendChild(newbody);
}
function search()
{
    let term=document.getElementById('searchTerm').value;
    let names=document.getElementsByClassName('personname');
    for(let j=0;j<names.length;j++)
    {
        if(names[j].innerHTML.indexOf(term)!=-1)
        {
            names[j].parentNode.className="rel";
        }
    }
}