import { MovieProps } from '@/lib/api/movie';
import MovieSelectionCard from '@/components/movie/movie-selection-card';

export default function AddNameForm({ onNameAdded, onNameChanged, name }: {
    name: string,
    onNameAdded: (name: string) => void,
    onNameChanged: (name: string) => void
}) {
    
    return (<div className="container mx-auto py-8" >
        <h1 className="text-2xl font-bold mb-6 text-center">Greenlight Simulator</h1>
        <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md" onSubmit={() => onNameAdded(name)}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    type="text" id="name" name="name" placeholder="Enter your name" value={name} onChange={(e) => onNameChanged(e.target.value)} />
            </div>
            <button
                className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                type="submit">Begin</button>
        </form>
    </div >)





};