export default function Footer() {

    const footerSections = [
        {
            title: 'Home',
            links: ['OUR PROPERTIES', 'BUY', 'SELL', 'RESOURCES', 'AREA GUIDE'],
        },
        {
            title: 'Area Guide',
            links: ['THORNBURY', 'LEITH', 'CLARKSBURG', 'COLLINGWOOD', 'CRAIGLEITH', 'THE BLUE MOUNTAINS'],
        },
        {
            title: 'Office Locations',
            links: ['COLLINGWOOD', 'THORNBURY', 'STAYNER'],
        },
        {
            title: 'Contact Us',
            links: ['MARY RIOPELLE', 'MARK VEER', 'KATE VEER', 'CORI WOOLLEY'],
        },
    ];

    return (
        <footer>
            <div className="flex text-sm justify-between m-4 lg:mx-80">
                {footerSections.map((section, index) => (
                    <div key={index}>
                        <h3 className="font-bold text-base">{section.title}</h3>
                        {section.links.map((link, linkIndex) => (
                            <div key={linkIndex} className="my-2">{link}</div>
                        ))}
                    </div>
                ))}
            </div>
            <div>
                <div className="m-4 text-xs">
                    The Trademarks REALTOR®, REALTORS®, And The REALTOR® Logo Are Controlled By The Canadian Real Estate Association (CREA) And Identify Real Estate Professionals Who Are Members Of CREA. The Trademarks MLS®, Multiple Listing Service® And The Associated Logos Are Owned By The Canadian Real Estate Association (CREA) And Identify The Quality Of Services Provided By Real Estate Professionals Who Are Members Of CREA.
                </div>
                <div className="m-4 text-xs">
                    Copyright © 2024 All Rights Reserved. Mark Veer, Broker And Mary Riopelle, Sales Representative For RE/MAX Four Seasons Collingwood. All Data Is Subject To Errors, Omissions Or Revisions & Is Not Warranted.
                </div>
            </div>
        </footer>
    );
}