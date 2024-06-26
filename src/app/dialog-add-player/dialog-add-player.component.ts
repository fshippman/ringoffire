import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss',
})

export class DialogAddPlayerComponent {

  name: string = '';
  
  constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>) {}

  /**
   * Closes the dialog and dismisses it.
   *
   * This function is called when the user clicks the "No" button in the dialog.
   * It closes the dialog and dismisses it, returning control to the caller.
   *
   */
  onNoClick(): void {
    this.dialogRef.close()
  }
}
