import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss'],
  imports:[MatDialogModule, MatButtonModule, MatIconModule, MatCardModule, CommonModule],
  standalone: true
})
export class DialogContentComponent {
  constructor (@Inject(MAT_DIALOG_DATA) public data : any){}
  dummyText: string = "Lorem ipsum et pharetra pharetra massa massa ultricies mi quis hendrerit. Non odio euismod lacinia at quis risus sed vulputate. Vulputate sapien nec sagittis aliquam. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Tristique et egestas quis ipsum. Dui ut ornare lectus sit amet. Ac feugiat sed lectus vestibulum mattis. Enim tortor at auctor urna nunc. Feugiat sed lectus vestibulum mattis ullamcorper. Eget mauris pharetra et ultrices neque. Euismod elementum nisi quis eleifend quam. Volutpat odio facilisis mauris sit amet massa. Ultricies lacus sed turpis tincidunt id aliquet risus. Egestas diam in arcu cursus euismod quis.\nLeo vel orci porta non pulvinar neque. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Consectetur libero id faucibus nisl tincidunt eget. Morbi tristique senectus et netus. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Sit amet nulla facilisi morbi tempus iaculis urna. Suscipit tellus mauris a diam maecenas. In aliquam sem fringilla ut. Tortor at risus viverra adipiscing. Scelerisque eleifend donec pretium vulputate sapien nec. Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Mi tempus imperdiet nulla malesuada pellentesque elit. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Nam at lectus urna duis convallis.\nLorem sed risus ultricies tristique nulla aliquet enim. Curabitur vitae nunc sed velit. Vel elit scelerisque mauris pellentesque pulvinar. Viverra nibh cras pulvinar mattis nunc sed blandit. Pellentesque pulvinar pellentesque habitant morbi. Elementum sagittis vitae et leo. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Senectus et netus et malesuada. Varius vel pharetra vel turpis nunc. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Quam elementum pulvinar etiam non quam.\n"
}
