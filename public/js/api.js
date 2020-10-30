
fetch("http://localhost:3000/api").then(
        res=>{
            res.json().then(
                data=>{
                    if(data.lenght > 0){
                        var temp = ''
                        data.forEach(item=>{
                            
                            temp += `
                                <div>
                                    ${item.username}
                                    ${item.name}
                                    ${item.email}
                                </div>
                            `
                        })
                        console.log(item)
                        document.getElementById('elements').innerHTML = temp
                    }
            }).catch(err=>{
                if(err) throw err
            })
    })

