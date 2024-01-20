const UsersCount = () => {

    return (
        <>
            <div className="flex flex-col text-right uppercase text-6xl gap-12 tracking-wider">
                <span className="font-montserrat font-bold">
                    375<br />
                    <span className="font-raleway font-thin text-4xl">
                        registered customers
                    </span>
                </span>
                <span className="font-montserrat font-bold">
                    375<br />
                    <span className="font-raleway font-thin text-4xl">
                        reservations done
                    </span>
                </span>
            </div>
        </>
    );
    
}

export default UsersCount;