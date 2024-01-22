const Dashboard = () => {
    return (
       <div className="h-screen flex flex-col">
            <div className="text-5xl text-midblack font-extrabold text-center mt-25">Supermind.bot</div>
            <div className="w-full h-full flex flex-wrap justify-between items-center px-52">
                <div className="text-3xl w-80 text-midblack font-extrabold text-center border border-solid rounded-5 border-black py-10 px-15">
                    <div>Clone1</div>
                    <div className="w-full mt-6 flex justify-between text-xl text-blue-500"> 
                        <a href="http://142.93.64.125/admin/en/auth/login" target="_blank">admin</a>
                        <a href="http://142.93.64.125/" target="_blank">front-end</a>
                    </div>
                </div>
                <div className="text-3xl w-80 text-midblack font-extrabold text-center border border-solid rounded-5 border-black py-10 px-15">
                    <div>Clone2</div>
                    <div className="w-full mt-6 flex justify-between text-xl text-blue-500"> 
                        <a href="http://159.203.121.53/admin/en/auth/login" target="_blank">admin</a>
                        <a href="http://159.203.121.53/" target="_blank">front-end</a>
                    </div>
                </div>
                <div className="text-3xl w-80 text-midblack font-extrabold text-center border border-solid rounded-5 border-black py-10 px-15">
                    <div>Clone3</div>
                    <div className="w-full mt-6 flex justify-between text-xl text-blue-500"> 
                        <a href="http://159.203.121.54/admin/en/auth/login" target="_blank">admin</a>
                        <a href="http://159.203.121.54/" target="_blank">front-end</a>
                    </div>
                </div>
                <div className="text-3xl w-80 text-midblack font-extrabold text-center border border-solid rounded-5 border-black py-10 px-15">
                    <div>Clone4</div>
                    <div className="w-full mt-6 flex justify-between text-xl text-blue-500"> 
                        <a href="http://159.203.125.91/admin/en/auth/login" target="_blank">admin</a>
                        <a href="http://159.203.125.91/" target="_blank">front-end</a>
                    </div>
                </div>
            </div>
       </div> 
    )
}

export default Dashboard