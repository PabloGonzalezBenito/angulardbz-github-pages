import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})

export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }];

  //onDeleteId = Index value : number

  onDeleteCharacter(id: string): void {
    //TODO:emitir el ID del personaje 
    this.onDelete.emit(id);

  }

}
