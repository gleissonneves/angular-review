/**
 * Armazenamento
 * 
 * Util para armazenar dados em localStorage
 */
export class Armazenamento {

    /**
     * Seta um armazenamento em localStorage
     * @param { Object } item item para armazenamento
     * @param { boolean } stringify converser em formato string
     */
    public setItem(item: { key: string, value: any }, stringify = false) {
        if(stringify) {
            localStorage.setItem(item.key, JSON.stringify(item.value));
            return
        }

        localStorage.setItem(item.key, item.value);
    }

    /**
     * Recupera o item armazenado pela chave
     * @param { string } key valor que será recuperado
     * @param { boolean } parse construí um valor ou um objeto
     */
    public getItem(key: string, parse: boolean = false) {
        const stored = localStorage.getItem(key);

        return !parse ? stored: JSON.parse(stored);
    }

    /**
     * Remove um item pela chave
     * @param { string } key valor que será removido
     */
    public removeItem(key: string) {
        localStorage.removeItem(key)
    }

    public clear() {
        localStorage.clear();
    }

    public verifyKeyExist(key: string) {
        return !!this.getItem(key);
    }
}