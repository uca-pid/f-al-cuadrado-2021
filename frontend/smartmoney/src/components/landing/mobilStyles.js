const mobilStyles = {
    body:{
        position:'fixed',
        padding:0,
        margin:0,
        top:0,
        left:0,
        width: '100%',
        height: '100%',
        display: "flex", 
        flexDirection: "column"
    },
    secondRow:{backgroundColor:"#D7D7D6", position:'relative', top:150, height:window.innerHeight-150},
    firstRow:{width:'100%', height:150,backgroundColor:'#292928', position:'absolute',display:'flex',justifyContent:'center',alignItems:'center'},
    formContainer:{display:'flex', height:'100%' ,justifyContent:'center',alignItems:'center'},
    form:{ display: "flex", flexDirection: 'column', width:'65%'},
    forgotPassword:{backgroundColor:"#D7D7D6",borderStyle:'none', color:'blue', textDecorationLine: 'underline', textAlign:'left', fontSize:10,webkitAppearance: 'none',},
    formCode:{ display: "flex", flexDirection: 'column', width:'100%'},
    input: {
        backgroundColor: "#D7D7D6",
        borderRadius: 5,
        padding: 3,
        fontSize:12,
    },
    label:{
        
        marginBottom:5,
        fontWeight:'bold',
        fontSize:12,
    },
    button1:{
        webkitAppearance: 'none',
        marginTop:15, 
        borderRadius:5, 
        backgroundColor:'#3399FF',
        border:0,
        color:'#FFFFFF',
        fontWeight:'bold',
        height:35,
        fontSize:12,
    },
    button1Hover:{
        webkitAppearance: 'none',
        marginTop:15, 
        borderRadius:5, 
        border:0,
        color:'#FFFFFF',
        fontWeight:'bold',
        height:35,
        backgroundColor:'#005CB8',
        fontSize:12,
    },
    button2:{
        webkitAppearance: 'none',
        borderRadius:5, 
        backgroundColor:'#FFFFFF',
        border:0,
        color:'#3399FF',
        fontWeight:'bold',
        height:35,
        fontSize:12,
    },
    button2Hover:{
        webkitAppearance: 'none',
        borderRadius:5, 
        border:0,
        color:'#3399FF',
        fontWeight:'bold',
        height:35,
        backgroundColor:'#AAAAAA',
        fontSize:12,
    },
    line:{
        marginTop: 15,
        marginBottom:15,
        backgroundColor:'#292928', 
        height:1.5, 
        borderRadius:10, 
        width:'120%', 
        position:'relative', 
        left:'-10%'
    },
    logo:{width:150, height:120},
}

export default mobilStyles;