import NavBar from "@/components/NavBar";

export default function Favoritos() {

    return (
        <>

            <NavBar active={"favoritos"}/>
            <main className="bg-slate-900 m-20 p-12 rounded">
                <h2>Favoritos</h2>
            </main>

        </>
    )
}