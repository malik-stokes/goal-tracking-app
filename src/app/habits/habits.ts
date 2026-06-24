import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-habits',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './habits.html',
  styleUrl: './habits.scss'
})
export class Habits {

  habits = signal<{ name: string; done: boolean }[]>([]);

    // 🔹 This is where your new function goes
  onSubmit(input: HTMLInputElement) {
    const name = input.value;
    if (!name.trim()) return;

    this.addHabit(name);
    input.value = '';
  }

  addHabit(name: string) {
    if (!name.trim()) return;
    this.habits.update(h => [...h, { name, done: false }]);
  }

  deleteHabit(index: number) {
  this.habits.update(h => h.filter((_, i) => i !== index));
}


  toggleDone(index: number) {
    this.habits.update(habits => {
      const updated = [...habits];

      updated[index] = {
        ...updated[index],
        done: !updated[index].done
      };

      return updated;
    });
  }
}
