<?php namespace App\Controllers;

use CodeIgniter\Controller;

class Pages extends Controller
{
    public function index()
    {
        $data['header'] = view('templates/home_header'); // Capitalize the first letter
        $data['content'] = view('templates/home_content');

        echo view('home', $data);
    }
    public function about()
    {
        $data['header'] = view('templates/about_header'); // Capitalize the first letter
        $data['content'] = view('templates/about_content');
        $data['footer'] = view('templates/footer');

        echo view('about', $data);
    }

    public function education(){
        $data['header'] = view('templates/header2'); // Capitalize the first letter
        echo view('education', $data);
    }

    public function assets(){
        $data['header'] = view('templates/header2');
        echo view('assets', $data);
    }

    public function faq(){
        $data['header'] = view('templates/header2');
        echo view('faq', $data);
    }

    public function insights(){
        $data['header'] = view('templates/header2');
        echo view('faq', $data);        
    }

    public function view($page = 'home')
    {
        if ( ! is_file(APPPATH.'/Views/pages/'.$page.'.php'))
        {
            // Whoops, we don't have a page for that!
            throw new \CodeIgniter\Exceptions\PageNotFoundException($page);
        }

        $data['title'] = ucfirst($page); // Capitalize the first letter

        echo view('templates/header', $data);
        echo view('pages/'.$page, $data);
        echo view('templates/footer', $data);
    }
}