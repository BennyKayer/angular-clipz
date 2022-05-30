import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: Array<IModal> = [];

  constructor() {}

  register(id: IModal['id']) {
    this.modals.push({ id, visible: false });
  }

  isModalOpen(id: IModal['id']): boolean {
    return !!this.getModalById(id)?.visible;
  }

  getModalById(id: IModal['id']): IModal | undefined {
    return this.modals.find((el) => el.id === id);
  }

  toggleModal(id: IModal['id']) {
    const modal = this.getModalById(id);
    if (modal) {
      modal.visible = !modal.visible;
    }
  }
}
