export default function Contact() {
    return (
        <section className="mx-4 lg:mx-12">
            <form className="flex flex-col w-full justify-center items-center shadow-md px-4 pb-4 rounded">
                <div className="flex flex-col w-full gap-2 lg:gap-4 justify-center items-center font-bold my-4 lg:my-8 text-3xl lg:text-5xl">
                    <div className="" >More Questions?</div>
                    <div className="">We're Always Here to Help.</div>
                </div>
                <div className="flex flex-row w-full gap-2 lg:gap-4">
                    <input placeholder="First Name" className="flex-1 my-2 pl-2 py-2 bg-slate-50 outline-none border-b border-black"></input>
                    <input placeholder="Last Name" className="flex-1 my-2 pl-2 py-2 bg-slate-50 outline-none border-b border-black"></input>
                </div>
                <div className="w-full flex gap-2 lg:gap-4">               
                    <input placeholder="Email" className="flex-1 my-2 pl-2 py-2 bg-slate-50 outline-none border-b border-black"></input>
                    <div className="flex items-center gap-4 flex-1">
                        <label htmlFor="question" className="flex-1">I have a question about:</label>
                        <select id="question" name="question" className="outline-none flex-1">
                            <option value="buying">Buying</option>
                            <option value="selling">Selling</option>
                            <option value="collingwood">Collingwood</option>
                            <option value="blue-mountains">The Blue Mountains</option>
                            <option value="thornbury">Thornbury</option>
                        </select>
                    </div>
                </div>
                <div className="w-full flex">
                    <textarea placeholder="Message" className="flex-1 my-2 pl-2 py-2 h-36 bg-slate-50 outline-none border-b border-black resize-none"></textarea>
                </div>
            </form>
        </section>
    )
}