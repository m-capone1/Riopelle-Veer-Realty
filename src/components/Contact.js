export default function Contact() {
    return (
        <section>
            <form className="flex flex-col w-full justify-center items-center shadow-md bg-slate-50">
                <div className="flex flex-col gap-2 lg:gap-4 justify-center items-center font-bold my-4 text-3xl lg:text-5xl">
                    <div className="" >More Questions?</div>
                    <div className="">We're Always Here to Help.</div>
                </div>
                <div className="flex flex-row">
                    <input placeholder="First Name"></input>
                    <input placeholder="Last Name"></input>
                </div>
                <div>               
                    <input placeholder="Email"></input>
                </div>
                <div>
                    <textarea placeholder="Message" className=""></textarea>
                </div>
            </form>
        </section>
    )
}