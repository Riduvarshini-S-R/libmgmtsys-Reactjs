const Table = () => {
    return ( 
        <>
            <div className="h-96 ml-4 mt-2 p-8 p bg-[#A9CEC2] opacity-75">
                <div className="bg-[#ffffff] h-80">
                    <table class="table-auto w-full">
                        <thead>
                            <tr className="text-center border-b-2 border-black/30 bg-[#D9D9D9]/20">
                            <th className="p-4">Sno.</th>
                            <th className="p-4">ISBN Number</th>
                            <th className="p-4">Book Title</th>
                            <th className="p-4">Copies</th>
                            <th className="p-4">Available</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr className="border-b-2 border-black/20">
                                <td className="py-4">1.</td>
                                <td>#8765</td>
                                <td>Game of Thrones - Part 1</td>
                                <td>12</td>
                                <td>10</td>
                            </tr>
                            <tr className="py-4 border-b-2 border-black/20">
                                <td className="py-4">2.</td>
                                <td>#8766</td>
                                <td>Game of Thrones - Part 2</td>
                                <td>12</td>
                                <td>10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
     );
}
 
export default Table;