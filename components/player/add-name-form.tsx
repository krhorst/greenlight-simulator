import { MovieProps } from '@/lib/api/movie';
import MovieSelectionCard from '@/components/movie/movie-selection-card';

export default function AddNameForm({ onNameAdded, onNameChanged, name }: {
    name: string,
    onNameAdded: (name: string) => void,
    onNameChanged: (name: string) => void
}) {
    
    return (<><form onSubmit={() => onNameAdded(name)}>
        <input placeholder="Enter your name" value={name} onChange={(e) => onNameChanged(e.target.value)} />
        <input type="submit" />
    </form>
    </>)

};